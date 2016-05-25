<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\PreAuthenticatedToken;
use AppBundle\Form\UserType;

class UsersController extends FOSRestController
{
	public function getUserAction()
	{
		$user = $this->get('security.context')->getToken()->getUser();

		$data = array(
			"id" => $user->getId(),
			"username" => $user->getUsername(),
			"email" => $user->getEmail(),
			"apiKey" => $user->getApiKey()
		);

        $view = $this->view($data);
        return $this->handleView($view);
	}

	public function postUserAction(Request $request)
	{
		$userManager = $this->get('fos_user.user_manager');
		$user = $userManager->createUser();

		$form = $this->createForm(new UserType(), $user);
		$jsonData = json_decode($request->getContent(), true);
        $form->bind($jsonData);



        if ($form->isValid()) {
        	$apiKey = random_bytes(60);
        	$apiKey = base64_encode($apiKey);
        	$user->setApiKey($apiKey);
        	$user->setEnabled(true);

        	$userManager->updateUser($user);
            //return $user;
            $view = $this->view($user);
        	return $this->handleView($view);
        } else {
            $view = $this->view($form);
        	return $this->handleView($view);
        }
	}
}
