<!doctype html>
<html>

<head>
    <title>WEB-nodejs</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1><a href="index.html">WEB</a></h1>
    <div id="container">
        <ol>
            <li><a href="1.html">html</a></li>
            <li><a href="2.html">css</a></li>
            <li><a href="3.html">javascript</a></li>
            <li><a href="4.html">nodejs</a></li>
            <li><a href="5.html">database</a></li>
        </ol>
        <div id="article">
            <script>
                var Color = {
                    toNight:function(){
                        document.querySelector('body').style.color = 'white';  
                    document.querySelector('body').style.backgroundColor = 'black';
                    var links = document.querySelectorAll('a');
                    var i = 0;
                    while(i < links.length){
                        links[i].style.color='white';
                        i = i + 1;
                       }
                    },
                    toDay: function(){
                        document.querySelector('body').style.backgroundColor = 'white';
                        document.querySelector('body').style.color = 'black';   
                        var links = document.querySelectorAll('a');
                        var i = 0;
                        while(i < links.length){
                        links[i].style.color='black';
                        i = i + 1;
                        }

                    }
                }

                
            </script>
            <input type="button" id="sdfkh" value="night" onclick="
                    if(this.value === 'night'){
                    Color.toNight();
                    this.value = 'day';


                   
                    }
                else {
                    Color.toDay();
                    this.value = 'night';


                    
                }
            ">
            <h2>Database</h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quae pariatur, labore itaque voluptatem
            corrupti
            a, quis quos facere sit, beatae illum? Tenetur, id vitae. Omnis nemo illo saepe fugiat.
            <div id="disqus_thread"></div>
            <script>
                /**
                *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
                /*
                var disqus_config = function () {
                this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
                this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                */
                (function () { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://hana-1.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered
                    by
                    Disqus.</a></noscript>
        </div>
    </div>
</body>

</html>