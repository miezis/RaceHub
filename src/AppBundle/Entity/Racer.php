<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Racer
 *
 * @ORM\Table(name="racer")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RacerRepository")
 */
class Racer
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="club", type="string", length=255)
     */
    private $club;

    /**
     * @var int
     *
     * @ORM\Column(name="lap_count", type="integer")
     */
    private $lapCount;

    /**
     * @var int
     *
     * @ORM\Column(name="best_time", type="integer")
     */
    private $bestTime;

    /**
     * @ORM\ManyToOne(targetEntity="Race", inversedBy="racers")
     * @ORM\JoinColumn(name="race_id", referencedColumnName="id")
     */
    private $race;


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
     * Set name
     *
     * @param string $name
     * @return Racer
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set club
     *
     * @param string $club
     * @return Racer
     */
    public function setClub($club)
    {
        $this->club = $club;

        return $this;
    }

    /**
     * Get club
     *
     * @return string 
     */
    public function getClub()
    {
        return $this->club;
    }

    /**
     * Set lapCount
     *
     * @param integer $lapCount
     * @return Racer
     */
    public function setLapCount($lapCount)
    {
        $this->lapCount = $lapCount;

        return $this;
    }

    /**
     * Get lapCount
     *
     * @return integer 
     */
    public function getLapCount()
    {
        return $this->lapCount;
    }

    /**
     * Set bestTime
     *
     * @param integer $bestTime
     * @return Racer
     */
    public function setBestTime($bestTime)
    {
        $this->bestTime = $bestTime;

        return $this;
    }

    /**
     * Get bestTime
     *
     * @return integer 
     */
    public function getBestTime()
    {
        return $this->bestTime;
    }

    /**
     * Set race
     *
     * @return Racer
     */
    public function setRace($race)
    {
        $this->race = $race;

        return $this;
    }

    /**
     * Get race
     *
     */
    public function getRace()
    {
        return $this->race;
    }
}
