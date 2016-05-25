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
		$race = $repository->find($slug);

		$data = array(
			'event_name' => $race->getEventName(),
			'id' => $race->getId(),
			'race_class' => $race->getRaceClass(),
			'racers' => $race->getRacers(),
			'finished' => $race->getFinished(),
			'started' => $race->getStarted()
		);

        $view = $this->view($data);
        return $this->handleView($view);
	}

	public function postRaceAction(Request $request)
	{
		$em = $this->get('doctrine')->getManager();
		$race = new Race();

		$user = $this->get('security.context')->getToken()->getUser();

		$race = $race->setUser($user);
		$race = $race->setStarted(FALSE);
		$race = $race->setFinished(FALSE);

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
