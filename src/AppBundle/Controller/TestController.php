<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class TestController extends FOSRestController
{
	//Get current user: $user = $this->get('security.context')->getToken()->getUser();
	//Check grant types: $this->get('security.context')->isGranted('ROLE_JCVD')
    public function testAction()
    {
    	$data = array("apis" => "kanalina");
        $view = $this->view($data);
        return $this->handleView($view);
    }

}
