<script>
</script>

<template>
    <footer id="yellowftr">
        <div class="containerftr">
            <h3>ABOUT</h3>
            <p>Masterstudy is Education WordPress theme <br> featured by Learning Management System (LMS) <br> for online
                education. <br>
                Developed by <a href="#">Stylemix Themes</a>
            </p>
            <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div class="containerftr">
            <h3>CONTACTS</h3>
            <span>USA,HOTEL CALIFORNIA 69, First Avenue,<br>JACKSONVILLE</span>
            <p>Tel.:+1 212 458 300 32</p>
            <p>Fax: +1 212 375 98 89</p>
            <a href="#">info @Masterstudy.com</a>
        </div>
        <div id="ftrlist">
            <h3>PAGES</h3>
            <ul>
                <li><a href="#"></a>Blog</li>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Shortcodes</li>
                <li><a href="#"></a>Courses</li>
                <li><a href="#"></a>Membership</li>
                <li><a href="#"></a>Typography</li>
            </ul>
        </div>
        <div id="ftrblog">
            <h3>BLOG</h3>
            <div class="blogcontent">
                <img src="../assets/img/photo-1517520287167-4bbf64a00d66-75x75.jpeg" alt="">
                <div>
                    <h4>Our Main Target is "scam" you as hard we can do </h4>
                    <span> - February 30,2018</span>
                </div>
            </div>


            <div class="blogcontent">
                <img src="../assets/img/photo-1490376840453-5f616fbebe5b-75x75.jpeg" alt="">
                <div>
                    <h4>Those other companies that will charge you a great amount of money just for the same reason</h4>
                    <span> - June 3, 2015</span>
                </div>
            </div>
        </div>

    </footer>
</template>

<style>
#yellowftr {
    background-color: rgb(242, 185, 30);
    width: 100%;
    height: 30vh;
    display: flex;
}

.containerftr {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

}

.containerftr a {
    text-decoration: none;
    color: rgb(31, 31, 88);
}

.containerftr h3 {
    color: rgb(58, 58, 58);
}

.containerftr p {
    color: rgb(58, 58, 58);
}

.containerftr span {
    color: rgb(58, 58, 58);
}

.containerftr i {
    color: rgb(58, 58, 58);
    margin-left: 5%;
}

.containerftr div {
    width: 50%;
}

#ftrlist {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 25%;
    align-items: flex-start;
    justify-content: flex-start;
}

#ftrlist h3 {
    color: rgb(58, 58, 58);
}

#ftrlist ul {
    color: rgb(58, 58, 58);
    font-size: 1em;
}

#ftrlist li {
    margin-bottom: 5%;

}

#ftrblog {
    display: flex;
    flex-direction: column;


}

#ftrblog h3 {
    color: rgb(58, 58, 58);
}

.blogcontent {
    display: flex;

}

.blogcontent img {
    width: 5em;
    height: 5em;
    margin-bottom: 4%;
}

.blogcontent div {
    width: 50%;
}

.blogcontent h4 {
    color: rgb(58, 58, 58);
    font-size: 1em;
    font-weight: 900;
    margin-left: 2%;
}

.blogcontent span {
    color: rgb(104, 103, 103);
    font-size: 1em;
    font-weight: 300;
    margin-left: 2%;
}
</style>