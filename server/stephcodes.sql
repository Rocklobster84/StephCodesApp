CREATE TABLE home(
  id serial,
  intro text,
  title character varying(50),
);

CREATE TABLE portfolio(
  postTitle: character varying(50),
  postUrl: text,
  mediaUrl: text,
  mediaAltText: character varying(100),
  postSubTitle: character varying(100),
  postPreview: text,
  buttonLink: text,
);

CREATE TABLE photography(
  imgUrl: text,
  altText: text,
  orientation: character varying(10),
);

INSERT INTO home(title, intro) VALUES
("Hi, I'm Stephanie", "A passionate Full Stack Developer with 9+ years of experience with designing, building, and deploying web applications utilizing various technologies and programming languages. I am constantly striving to learn more and hone my craft. This has led to experience across a great number of technologies. I have a background in various industries including law, real estate, marketing, and information technology as well as being a graphic designer. This enables me to bring a unique perspective and high level of organization to any project I work on.");

INSERT INTO portfolio(postTitle, postUrl, mediaUrl, mediaAltText, postSubTitle, postPreview, buttonLink) VALUES
("BB63 Salon", "https://bb63salon.com/", "https://www.stephcodes.dev/images/bb63-salon.png", "BB63 Salon Website", "HTML, CSS, JavaScript, GitHub Actions, Netlify", "Part of the work I have done for Cozzette includes creating and maintaining the website for her business, <a href=\"https://bb63salon.com/\" target=\"_blank\">BB63 Salon</a>. The salon itself acts as the hub for several different people in the beauty industry. This is a static site that uses GitHub Actions to automatically deploy to the host, Netlify.", "https://bb63salon.com/"),
("Cozzette Hairstylist", "https://focused-bassi-e51976.netlify.app/", "images/cozzette-hairstylist.png", "Cozzette's Website", "HTML, CSS, JavaScript, GitHub Actions, Netlify", "I started doing freelance work for Cozzette in 2012 creating the graphics and signage for BB63 Salon. Since that time I have also become her webmaster for <a href=\"https://focused-bassi-e51976.netlify.app/\" target=\"_blank\">cozzettehairstylist.com</a>. This is a static site that uses GitHub Actions to automatically deploy to the host, Netlify.", "https://focused-bassi-e51976.netlify.app/"),
("Email Scripting with PHP", "https://replit.com/@Stephycamaro/Scripting-with-PHP#submit.php", "https://www.youtube.com/embed/WbOeuikxG1E?si=2lHALf5Cc-AVJsCT", NULL, "PHP, HTML, CSS",  "In 2019, I lead a mini-workshop on how to build a PHP script to send e-mails. This workshop was presented by <a href=\"https://www.womenwhocode.com/network/dfw\" target=\"_blank\">Women Who Code Dallas/Ft. Worth</a>. In this course, we learn about the IT background of how sending and receiving email works, then get into creating a basic script to take the inputs from a form and send them to a gmail account. The code is hosted on <a href=\\"https://replit.com/\" target=\"_blank\">repl.it</a> to have an easy-to-use, interactive space.", "https://replit.com/@Stephycamaro/Scripting-with-PHP#submit.php");

INSERT INTO photograph(imgUrl, altText, orientation) VALUES
("images/photography/colo-clouds-horiz.jpg", "Photo of the horizon showing blues skies above the clouds and rain beneath. Taken in Colorado.", "horizontal"),
("images/photography/GOG-steam-boat-vert.jpg", "Photo of the Steam Boat rock formation in Garden of the Gods, Colorado.", "vertical"),
("images/photography/baby-se.jpg", "Photo of two small children sitting in the grass.", "vertical"),
("images/photography/GOG-rock-horiz.jpg", "Photo of one of the many rock formations in Garden of the Gods, Colorado Springs, Colorado.", "horizontal"),
("images/photography/GOG-distance-horiz.jpg", "Photo from a distances of a rock formation in Garden of the Gods.", "horizontal"),
("images/photography/wedding-brains.jpg", "Photo of a mother and daughter right before a wedding.", "vertical");
