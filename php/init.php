

	<?php 
	header('Content-type: text/plain');
	require_once(dirname(__FILE__). "/classes/figure.php");

	switch ($_POST["typeF"]) {
		case 'cercle':
			$cercle = new Cercle($_POST["codefigure"],$_POST["nomfigure"],$_POST["rayon"] );
			echo $cercle->afficher();
			break;
		case 'rectangle':
			$rec = new Rectangle($_POST["codefigure"],$_POST["nomfigure"],$_POST["largeur"],$_POST["longueur"] );
			echo $rec->afficher();
			break;
		case 'triangle':
			$tri = new Triangle($_POST["codefigure"],$_POST["nomfigure"],$_POST["hauteur"],$_POST["base"],$_POST["decal"] );
			echo $tri->afficher();
			break;
		case 'fonction':
			$func = new Fonction($_POST["codefigure"],$_POST["nomfigure"],$_POST["a"],$_POST["n"],$_POST["b"] );
			echo $func->afficher();
			break;
		case 'cylindre':
			$cylindre = new Cylindre($_POST["codefigure"],$_POST["nomfigure"],$_POST["hauteur"],$_POST["rayon"] );
			echo $cylindre->afficher();
			break;
		case 'cone':
			$cone = new Cone($_POST["codefigure"],$_POST["nomfigure"],$_POST["hauteur"],$_POST["rayon"] );
			echo $cone->afficher();
			break;
		case 'sphere':
			$sphere = new Sphere($_POST["codefigure"],$_POST["nomfigure"],$_POST["rayon"] );
			echo $sphere->afficher();
			break;
		case 'parallelepipede':
			$parra = new Parallelepipede($_POST["codefigure"],$_POST["nomfigure"],$_POST["largeur"],$_POST["longueur"],$_POST["hauteur"]);
			echo $parra->afficher();
			break;

		default:
			echo "Erreur";
			break;
	}


	 ?>
