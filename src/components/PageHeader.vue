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
    <header>
        <section id="trueheader">
            <div id="logo">
                <img src="../assets/images (1)/MasterStudy-1.svg" alt="logo">
            </div>
            <div id="menu">
                <a v-for="link in this.store.menu" href="#link">{{ link.title }}</a>
            </div>
            <div id="falogo">
                <a href="#">social</a>
                <a href="#">social</a>
                <a href="#">social</a>
                <a href="#">social</a>
            </div>
        </section>
        <section id="jumbotron">
            <div id="textcontainer">
                <h1>Start Your Human <span id="color">Revolution</span> Today</h1>
                <p>A wonderful serenity has taken possession of my entire soul, please save me because i want to be a
                    horribly
                    boring person </p>
            </div>
            <div id="floatingchrono">
                <div id="chronoleft">
                    <h2>Limited Sale : <span>All courses with 55% off</span></h2>
                    <input id="asbutton" type="text" placeholder="Enter your email">
                    <button id="rounded">SUBSCRIBE</button>
                </div>
                <div id="chronoright">
                    <span id="time">69</span>
                    <span id="interval">Hours</span>
                </div>
            </div>

        </section>
    </header>
</template>

<style>
header {
    width: 100%;
    height: 100vh
}

#trueheader {
    background-color: white;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#logo {
    margin-right: 15%;
}

#jumbotron {
    width: 100%;
    height: 85vh;
    background-image: url(../assets/img/slide-1.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

}

#textcontainer {
    width: 25%;
    height: 35vh;
    margin-left: 28%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
}

#textcontainer h1 {
    color: rgb(58, 58, 58);
    font-weight: 900;
    font-size: 3em;


}

#textcontainer span {
    color: rgb(242, 185, 30);
    font-weight: 900;
    font-size: 1em;

}

#textcontainer p {
    color: rgb(58, 58, 58);
    font-weight: 600;
}

#floatingchrono {
    width: 50%;
    height: 20vh;
    background-color: rgb(242, 185, 30);
    border-radius: 0.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 25%;
    bottom: -5%;
}
</style>