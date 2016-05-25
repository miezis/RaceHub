<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\RaceType;
use AppBundle\Entity\Race;

class RacesController extends FOSRestController
{
	public function getRacesAction()
	{
		$repository = $this->get('doctrine')->getRepository('AppBundle:Race');
		$data = $repository->findAll();

        $view = $this->view($data);
        return $this->handleView($view);
	}

	public function getUserRacesAction() {
		$user = $this->get('security.context')->getToken()->getUser();
		$data = $user->getRaces();

        $view = $this->view($data);
        return $this->handleView($view);
	}

	public function getRaceAction($slug) {
		$repository = $this->get('doctrine')->getRepository('AppBundle:Race');
		$data = $repository->find($slug);

        $view = $this->view($data);
        return $this->handleView($view);
	}

	public function postRaceAction(Request $request)
	{
		$em = $this->get('doctrine')->getManager();
		$race = new Race();

		$user = $this->get('security.context')->getToken()->getUser();

		$race->setUser($user);

		$form = $this->createForm(new RaceType(), $race);

		$json_data =  json_decode($request->getContent(), true);

		$form->bind($json_data);

		if ($form->isValid()) {
			$em->persist($race);

			$em->flush();

			$view = $this->view($race);
			return $this->handleView($view);
		} else {
			$view = $this->view($form);
			return $this->handleView($view);
		}
	}
}
