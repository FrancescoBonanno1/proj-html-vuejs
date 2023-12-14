<script>
import { store } from '../store';
export default {
    components: {
        store
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <section id="author">
        <div id="authorcontainer">
            <h2>Hey there, my name is Deez Nuts. I'm the founder of the Boogaloo Academy.</h2>
            <img src="../assets/img/sign-184x108.jpg" alt="firmetta">
        </div>
        <div id="authorquote">
            <p> The nethermost caverns are not for the fathoming of eyes that see; for their marvels are strange and
                terrific. Cursed the ground where dead thoughts live new and oddly bodied, and evil the mind that is held by
                no head. Wisely did Ibn Schacabac say, that happy is the tomb where no wizard hath lain, and happy the town
                at night whose wizards are all ashes. For it is of old rumour that the soul of the devil-bought hastes not
                from his charnel clay, but fats and instructs the very worm that gnaws; till out of corruption horrid life
                springs, and the dull scavengers of earth wax crafty to vex it and swell monstrous to plague it. Great holes
                are digged where earth's pores ought to suffice, and things have learnt to walk that ought to crawl.</p>
        </div>
    </section>
    <section id="coursesection">
        <div v-for="course in this.store.coursecard" id="coursecard">
            <span v-if="course.special == true" id="special">SPECIAL</span>
            <span v-else></span>
            <img :src="course.image" alt="photo">
            <h3>{{ course.title }}</h3>
            <p>{{ course.type }}</p>
            <hr>
            <div id="courselenght">
                <font-awesome-icon :icon="course.signal" />
                <span>{{ course.difficulty }}</span>
                <font-awesome-icon :icon="course.list" />
                <span>{{ course.dimension }}</span>
                <font-awesome-icon :icon="course.clock" />
                <span>{{ course.time }}</span>
            </div>
        </div>


    </section>
    <section id="advertisement">
        <div id="textarea">
            <h2>Get my Exclusive Investing Book just for $19.50</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officia beatae, velit illum fugiat, dolorum,
                maiores ipsum neque saepe voluptate voluptatum sapiente!</p>
            <a href="#"><img src="../assets/img/amazon.png" alt=""></a>

        </div>
        <div id="handcontainer">
            <img src="../assets/img/book.png" alt="book">

        </div>
        <div id="smallnav">
            <a href="#"><i class="fa-solid fa-tv"></i></a>
            <a href="#"><i class="fa-regular fa-life-ring"></i></a>
            <a href="#"><i class="fa-solid fa-wrench"></i></a>
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
            <a href="#"><i class="fa-solid fa-mobile-screen-button"></i></a>
        </div>


    </section>
    <section id="whyme">
        <h2>Why my courses?</h2>
        <div v-for="dcard in  this.store.dynamicard " id="dynamicard">
            <font-awesome-icon :icon="dcard.icon" />
            <h3>{{ dcard.title }}</h3>
            <p>{{ dcard.description }}</p>
        </div>

    </section>
    <section id="users">
        <div v-for="element in this.store.users" id="userscontainer">
            <font-awesome-icon :icon="element.icon" />
            <h2>{{ element.number }}</h2>
            <h3>{{ element.text }}</h3>
        </div>
    </section>
    <section id="students">
        <h2>What Students Say</h2>
        <div id="scontainer">
            <button><i class="fa-solid fa-arrow-left"></i></button>
            <img v-for="image in this.store.students" :src="image.img" alt="photo">
            <button><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div id="reviewcont">
            <h4 v-for="messages in this.store.students">{{ messages.message }}</h4>
        </div>
        <div id="starscont">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div id="pcontainer">
            <p v-for="text in this.store.students">{{ text.p }}</p>
        </div>
    </section>
</template>

<style>
#author {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#authorquote {
    width: 35%;
    height: 40%;
}

#authorquote p {
    color: rgb(58, 58, 58);
    font-weight: 900;
}

#authorcontainer h2 {
    color: rgb(58, 58, 58);
    font-weight: 900;
}

#authorcontainer {
    width: 35%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#coursesection {
    background-color: rgb(243, 243, 243);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    flex-wrap: wrap;
}

#coursecard {
    width: 26%;
    height: 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    margin: 2%;
    padding-bottom: 2%;
    border: 1px solid rgb(58, 58, 58);
}

#coursecard img {
    width: 100%;

}

#coursecard h3 {
    color: rgb(58, 58, 58);
    font-size: 1.3em;
    font-weight: 700;
}

#coursecard p {
    color: rgb(126, 124, 124);
}

#coursecard hr {
    width: 22em;
    color: rgb(51, 51, 51);

}


#special {
    position: absolute;
    background-color: rgb(242, 185, 30);
    border-radius: 0.5em;
    top: 0%;
    right: 5%;
    font-weight: 500;
}

#courselenght {
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;
}

#courselenght :first-child {
    color: rgb(242, 185, 30);
}

#courselenght span {
    color: rgb(58, 58, 58);

}

#advertisement {
    background-image: url(../assets/img/slider_1-1917x607-1914x606.jpg);
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#textarea {
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#textarea h2 {
    color: rgb(242, 185, 30);
    font-weight: 900;
}

#textarea p {
    font-style: italic;
}

#handcontainer {
    width: 40%;
    height: 100%;
    position: relative;

}

#handcontainer img {
    width: 55%;
    position: absolute;
    bottom: 0%;
    right: 35%;

}


#smallnav {
    width: 3%;
    height: 25%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    right: 0%;
    top: 55%;
    border: 1px solid rgb(192, 190, 190);
    border-radius: 0.5em;
    z-index: 9;
}

#smallnav i {
    font-size: 1.5em;
    margin-top: 0%;
    margin-bottom: 0%;
    text-decoration: none;
    color: rgb(126, 124, 124);

}

#smallnav i:hover {
    color: darkgoldenrod;
    transition: 5ms;

}

#whyme {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(237, 242, 245);
}

#whyme h2 {
    position: absolute;
    top: 0%;
    left: 44%;
    color: rgb(51, 51, 51);
    font-weight: 900;
}

#dynamicard {
    width: 35%;
    border: 0.5em solid rgb(237, 242, 245);
    border-left: 0.5em solid rgb(242, 185, 30);
    box-shadow: 10px 10px 10px 10px rgb(173, 173, 173);
    margin: 1%;
    display: flex;
    flex-wrap: wrap;
}

#dynamicard h3 {
    color: rgb(51, 51, 51);
    font-weight: 800;
}

#dynamicard p {
    color: rgb(51, 51, 51);
    margin-left: 1%;

}

#dynamicard :first-child {
    font-size: 3em;
    margin: 2%;
    color: rgb(242, 185, 30);
}

#users {
    width: 100%;
    height: 50vh;
    background-image: url(../assets/img/counter-1919x1101.jpg);
    background-position-y: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#userscontainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

#userscontainer :first-child {
    position: absolute;
    top: -10%;
    left: -5%;
    font-size: 3em;

}

#userscontainer h2 {
    color: rgb(242, 185, 30);
}

#students {
    width: 100%;
    height: 70vh;
    background-color: rgb(240, 248, 255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#students h2 {
    color: rgb(58, 58, 58);
}

#scontainer {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#scontainer img {
    border-radius: 3em;
}

#scontainer img:hover {
    width: 25%;
    border-radius: 5em;
    cursor: pointer;
}

#scontainer button {
    border: 1px solid rgb(240, 248, 255);
    background-color: rgb(240, 248, 255);
}

#reviewcont {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 35%;
}

#reviewcont h4 {
    font-size: 1.5em;
    margin-top: 2%;
    color: rgb(58, 58, 58);
}

#starscont i {
    color: rgb(242, 185, 30);
}

#pcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
}

#pcontainer p {
    color: rgb(58, 58, 58);
    width: 80%;
}
</style>