<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;

class UsersController extends FOSRestController
{
	public function getUserAction()
	{
		$user = $this->get('security.context')->getToken()->getUser();

		$data = array(
			"id" => $user->getId(),
			"username" => $user->getUsername(),
			"email" => $user->getEmail()
		);

        $view = $this->view($data);
        return $this->handleView($view);
	}
}
