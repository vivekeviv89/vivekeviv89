        var titles = new Array();
        var texts = new Array();

        function newTitle()
        {
            var name = "Title" + titles.length;
            
            if (name !== "Title0")
            {
                newHeading();
                end;
            }
            
            var newTitle = document.createElement('input');
            newTitle.setAttribute("type", "text")
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "title")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            titles.push(name)
            
            workSpace.appendChild(newTitle);
            document.getElementById(name).focus()
        }
        
        function newHeading()
        {
            var name = "Title" + titles.length;
            
            var newTitle = document.createElement('input');
            newTitle.setAttribute("type", "text")
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "def")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            titles.push(name)
            
            workSpace.appendChild(newTitle);
            document.getElementById(name).focus()
        }
        
        function newText()
        {
            var name = "Text" + texts.length;
            
            var newTitle = document.createElement('textarea');
            newTitle.setAttribute("placeholder", name)
            newTitle.setAttribute("class", "text")
            newTitle.setAttribute("id", name)
            var workSpace = document.getElementById('workSpace');
            texts.push(name)
            
            workSpace.appendChild(newTitle);
            document.getElementById(name).focus()
        }  
