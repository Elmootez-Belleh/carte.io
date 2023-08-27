


$(document).ready(function () {

var data = [
  {
    region:"FR-71",
    city:" Le Creusot",
    entreprise:" XPlan",
    nom:"ELBAKNAOUI",
    prenom:" Amine",
    poste:" Alternant",

  },
  {
    region:"FR-71",
    city:" Le Creusot",
    entreprise:" Alstom",
    nom:"BERLAND",
    prenom:" Bastien",
    poste:" Stagiaire",

  },

  {
    region:"FR-70",
    city:" Magny-Vernois",
    entreprise:" Faurecia",
    nom:" OLU",
    prenom:" Jide",
    poste:" Alternant",
  },

  {
    region:"FR-21",
    city:" Valduc",
    entreprise:" CEA",
    nom:" MONTAGNON",
    prenom:" Ludovic",
    poste:" Alternant",
  },

  {
    region:"FR-21",
    city:" Valduc",
    entreprise:" CEA",
    nom:" BERCHER",
    prenom:" Remy",
    poste:" Alternant",
  },

  {
    region:"FR-74",
    city:" Faverges",
    entreprise:" Stäubli",
    nom:" VENNAT",
    prenom:" Abel",
    poste:" Alternant",
  },
  {
    region:"FR-74",
    city:" Annecy",
    entreprise:" Omron Electronics",
    nom:" MILLET",
    prenom:" AKIMOUL",
    poste:" Alternant",
  },

]

$( "svg path" ).each(function( index ) {
  $( this ).attr( "data-bs-toggle",  "tooltip");
  $( this ).attr( "data-bs-html",  "true");

  var regionID = $( this ).attr( "id" );
  var regionName = $( this ).attr( "title" );


  var studentsByRegion = data.filter(d => d.region === regionID)
  var content = "<div class='tooltipContent'><h5>" + regionName + "</h5>"
  studentsByRegion.map(s => {
    content += "<hr /> Nom: " + s.nom + "<br /> Prenom:" + s.prenom +"<br /> Entreprise:" + s.entreprise + "<br /> Poste:" + s.poste + "<br /> Ville:" + s.city
  })
  content += "</div>"


  $( this ).attr( "title", content );
});

$( "svg path" ).on( "mouseenter", function(e) {
  var id = $( this ).attr( "id" );
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
   $( ".popup" ).popover('show');



});

});
