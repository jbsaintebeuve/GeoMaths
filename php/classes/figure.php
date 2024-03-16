<?php 



	class figure{

		public $Codefigure;
		public $Nomfigure;

		function __destruct(){
			echo "<p class='destruct'>Destruction de la figure ", $this->Codefigure,"</p>";
		}

	}

	/**
	 * Triangle
	 */
	class Triangle extends Figure
	{
		public $Type;
		public $Hauteur;
		public $Base;
		public $decalagebase;

		function __construct($Codefigure,$Nomfigure,$Hauteur, $Base, $decalagebase)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->Hauteur = $Hauteur;
			$this->Base = $Base;
			$this->decalagebase = $decalagebase;
		}
		function longcote(){
			$AB = ($this->decalagebase) ** 2 + ($this->hauteur) ** 2;
			$AC = ($this->base - $this->decalagebase) ** 2 + ($this->hauteur) ** 2;
			return sqrt($AB) + sqrt($AC);
		}
		function surface(){
			return ($this->Hauteur * $this->Base)/2;
		}
		function perimetre(){
			return $this->Base + $this->longcote();
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le cercle a un perimètre de: ", $this->perimetre(),"</p>";
			echo "<p>Le cercle a une surface de: ", $this->surface(),"</p>";
		}

	}
	/**
	 * Cercle
	 */
	class Cercle extends Figure
	{
		public $Rayon;

		function __construct($Codefigure,$Nomfigure,$Rayon)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->Rayon = $Rayon;
		}
		function surface(){
			 return pi()*$this->Rayon*$this->Rayon;
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le cercle a un rayon de: ", $this->Rayon,"</p>";
			echo "<p>Le cercle a une surface de: ", $this->surface(),"</p>";
		}
	}
	/**
	 * Rectangle
	 */
	class Rectangle extends Figure
	{
		public $largeur;
		public $longueur;

		function __construct($Codefigure,$Nomfigure,$largeur,$longueur)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->largeur = $largeur;
			$this->longueur = $longueur;
		}
		function surface(){
			return $this->largeur * $this->longueur;
		}
		function perimetre(){
			return ($this->largeur + $this->longueur) * 2;
		}
		function diagonale(){
			return sqrt(($this->largeur * $this->largeur) + ($this->longueur * $this->longueur));
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le rectangle a un perimetre de: ", $this->perimetre(),"</p>";
			echo "<p>Le rectangle a une surface de: ",$this->surface(),"</p>";
			echo "<p>La diagonale du rectangle est de: ", $this->diagonale(),"</p>";
		}
	}
	/**
	 * Fonction
	 */
	class Fonction extends Figure
	{
		public $a;
		public $n;
		public $b;

		function __construct($Codefigure,$Nomfigure,$a,$n,$b)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->a = $a;
			$this->n = $n;
			$this->b = $b;
		}

		function fonct($x) {
			return($this->a*(pow($x, ($this->n)))+$this->b);  
		}

		function aire($x,$y) {
			$n = 100;
			$w = ($y - $x)/$n;
			$sum = 0;

			for ( $i = 1; $i <= $n; $i++){
				$xi = $x + ($i-1)*$w;
				$sum += ($w * $this->fonct($xi));
			}
			return $sum;
		}

		
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>La fonction a un coeficient directeur de ",$this->a,"</p>";
			echo "<p>Une exponentiation de: ", $this->n,"</p>";
			echo "<p>Un décalage aux ordonnées est de: ", $this->b,"</p>";
			echo "<p>L'air comprise entre 1 et 2 est de: ", $this->aire(1, 2),"</p>";
		}
	}
	/**
	 * Cylindre
	 */
	class Cylindre extends Cercle
	{
		public $hauteur;

		function __construct($Codefigure,$Nomfigure,$hauteur,$rayon)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->hauteur = $hauteur;
			$this->Rayon = $rayon;
		}
		function volume(){
			return $this->hauteur * $this->surface();
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le cylindre a un rayon de: ",$this->Rayon,"</p>";
			echo "<p>Le cylindre a une surface de: ", $this->surface(),"</p>";
			echo "<p>Le cylindre a un volume de: ", $this->volume(),"</p>";
		}
	}
	/**
	 * Cone
	 */
	class Cone extends Cercle
	{
		public $hauteur;

		function __construct($Codefigure,$Nomfigure,$hauteur,$rayon)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->hauteur = $hauteur;
			$this->Rayon = $rayon;
		}
		function volume(){
			return $this->surface() * $this->hauteur / 3;
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le cône a un rayon de: ",$this->Rayon,"</p>";
			echo "<p>Le cône a une surface de: ", $this->surface(),"</p>";
			echo "<p>Le cône a un volume de: ", $this->volume(),"</p>";
		}
	}
	/**
	 * Sphere
	 */
	class Sphere extends Cercle
	{
		
		function __construct($Codefigure,$Nomfigure,$rayon)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->Rayon = $rayon;
		}
		function volume(){
			return 4/3 * pi() * $this->Rayon ** 3;
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>La sphère a un rayon de: ",$this->Rayon,"</p>";
			echo "<p>La sphère a une surface de: ", $this->surface(),"</p>";
			echo "<p>La sphère a un volume de: ", $this->volume(),"</p>";
		}
	}
	/**
	 * Parallelepipede
	 */
	class Parallelepipede extends Rectangle
	{
		public $hauteur;
		function __construct($Codefigure,$Nomfigure,$largeur,$longueur,$hauteur)
		{
			$this->Codefigure = $Codefigure;
			$this->Nomfigure = $Nomfigure;
			$this->largeur = $largeur;
			$this->longueur = $longueur;
			$this->hauteur = $hauteur;
		}
		function volume(){
			return $this->surface() * $this->hauteur;
		}
		function afficher(){
			echo "<div class='head-info-fig'><h2>",$this->Nomfigure,"</h2><p class='codefigure'>",$this->Codefigure,"</p></div>";
			echo "<p>Le parallélépipède a un perimètre de: ",$this->perimetre(),"</p>";
			echo "<p>Le parallélépipède a une surface de base: ", $this->surface(),"</p>";
			echo "<p>Le parallélépipède du rectangle a un volume de: ", $this->volume(),"</p>";
		}
	}


?>