<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\UserType;

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

	public function postRaceAction(Request $request)
	{
		
	}
}
