<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Race
 *
 * @ORM\Table(name="race")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RaceRepository")
 */
class Race
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="event_name", type="string", length=255)
     */
    private $eventName;

    /**
     * @var string
     *
     * @ORM\Column(name="race_class", type="string", length=255)
     */
    private $raceClass;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="races")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Racer", mappedBy="race", cascade="persist")
     */
    private $racers;

    /** 
     * @var boolean 
     *
     * @ORM\Column(name="started", type="boolean")
     */
    public $started;

    /** 
     * @var boolean 
     *
     * @ORM\Column(name="finished", type="boolean")
     */
    public $finished;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set eventName
     *
     * @param string $eventName
     * @return Race
     */
    public function setEventName($eventName)
    {
        $this->eventName = $eventName;

        return $this;
    }

    /**
     * Get eventName
     *
     * @return string 
     */
    public function getEventName()
    {
        return $this->eventName;
    }

    /**
     * Set raceClass
     *
     * @param string $raceClass
     * @return Race
     */
    public function setRaceClass($raceClass)
    {
        $this->raceClass = $raceClass;

        return $this;
    }

    /**
     * Get raceClass
     *
     * @return string 
     */
    public function getRaceClass()
    {
        return $this->raceClass;
    }

    /**
     * Set user
     *
     * @return Race
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Get Racers
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRacers()
    {
        return $this->racers;
    }

    /**
     * Add Racer
     *
     * @param \AppBundle\Entity\Racer $racer
     * @return Race
     */
    public function addRacer(\AppBundle\Entity\Racer $racer)
    {
        $this->racers[] = $racer;

        return $this;
    }

    public function setStarted($started) 
    {
        $this->started = (Boolean) $started;

        return $this;
    }

    public function getStarted()
    {
        return $this->started;
    }

    public function setFinished($finished) 
    {
        $this->finished = (Boolean) $finished;

        return $this;
    }

    public function getFinished()
    {
        return $this->finished;
    }
}
