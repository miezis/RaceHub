<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class TestController extends FOSRestController
{
    public function testAction()
    {
    	$data = array("apis" => "kanalina");
        $view = $this->view($data);
        return $this->handleView($view);
    }

}
