# Canvas渲染Dom
`forginObject`
```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head lang="en">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<p><canvas id="canvas" style="border:2px solid black;" width="200" height="200"></canvas>
    <script>
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        // var data = "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +
        //         "<foreignObject width='100%' height='100%'>" +
        //         "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:40px;padding-top: 30px;'>" +
        //         "<em>斜体</em> 正常 <span style='color:white; text-shadow:0 0 2px red;'>发光</span>" +
        //         "<h4 style='margin-top: 0px'>dddd</h4>" +
        //         "</div>" +
        //         "</foreignObject>" +
        //         "</svg>";
        const data = `
          <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
            <foreignObject width='100%' height='100%'>
              <div xmlns='http://www.w3.org/1999/xhtml'>
                <span style="color: red">标准</span>
                <em>斜体</em>
              </div>
            </foreignObject>
          </svg>
        `
        var DOMURL = self.URL || self.webkitURL || self;
        var img = new Image();
        var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
        var url = DOMURL.createObjectURL(svg);
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
        };
        img.src = url;
    </script>
</body>
</html>
```