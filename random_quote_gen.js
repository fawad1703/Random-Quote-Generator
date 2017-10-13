$(document).ready(function(){
   
  function getquote(){
    
    var quotes=["I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.","There is only one way to avoid criticism: do nothing, say nothing, and be nothing.","I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.","Don’t judge each day by the harvest you reap but by the seeds that you plant."," The question isn’t who is going to let me; it’s who is going to stop me."," If things seem under control, you are just not going fast enough.","You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something; your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life."];
  
    var authors=["-Kanye West","-Aristotle","-Albert Einstien","-Robert Louis Stevenson","-Ayn Rand","-Mario Andretti","-teve Jobs"];
     
    var randomNum=Math.floor((Math.random()*quotes.length));
    var randomquote=quotes[randomNum];
    var randomauthor=authors[randomNum];
    
    $(".quote").text(randomquote);
    $(".author").text(randomauthor);
  }
    
    $(".btn").on("click", function(){
      getquote();
      
      var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
      
       var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    });
  
  });
