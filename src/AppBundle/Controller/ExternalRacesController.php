<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\RaceType;
use AppBundle\Entity\Race;
use AppBundle\Entity\Racer;

class ExternalRacesController extends FOSRestController
{
	public function postRaceUpdateAction(Request $request)
	{
		$data = json_decode($request->getContent(), true);

		$id = $data['id'];
		$racers = $data['racers'];
		$finished = $data['finished'];

		$em = $this->get('doctrine')->getManager();
		$race = $em->getRepository('AppBundle:Race')->find($id);

		$race = $race->setStarted(TRUE);

		if ($race->getFinished()) {
			$view = $this->view($race);
			return $this->handleView($view);
		}

		$existingRacers = $race->getRacers();

		if (count($existingRacers) != 0) {
			foreach($racers as $racer) {
				$key = $this->findByName($existingRacers, $racer['name']);

				$existingRacers[$key]->setLapCount($racer['lap_count']);
				$existingRacers[$key]->setBestTime($racer['best_time']);
			}
		} else {
			foreach ($racers as $racer) {
				$newRacer = new Racer();

				$newRacer = $newRacer->setName($racer['name']);
				$newRacer = $newRacer->setClub($racer['club']);
				$newRacer = $newRacer->setLapCount($racer['lap_count']);
				$newRacer = $newRacer->setBestTime($racer['best_time']);
				$newRacer = $newRacer->setRace($race);

				$race = $race->addRacer($newRacer);
			}
		}

		$race->setFinished($finished === 'true');

		$em->persist($race);
		$em->flush();

		$view = $this->view($race);
		return $this->handleView($view);
	}

	private function findByName($array, $name) {
		foreach($array as $key => $element) {
			if ($element->getName() == $name) {
				return $key;
			}
		}
	}
}
