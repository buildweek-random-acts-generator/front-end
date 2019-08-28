import React, { Fragment, Component }from 'react';
import { Link, Route } from "react-router-dom";
import './UserHome.css';
import conimg from './images/Contacts Button.jpg'
import idimg from './images/Ideas.png'
import ranimg from './images/randomizer.png'

export default function UserHome () {
  


    return (
<div>
        <div className='WelcomeBack'>
            <h2>Welcome Back</h2>
        </div>

<div className='shapes'>
        <figure class="snip1321"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample26.jpg" alt="sq-sample26"/>
  <figcaption><i class="ion-upload"></i>
    <h4>Inverness    </h4>
    <h2>McKenzie</h2>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1321 hover"> <img src={idimg} alt="Ideas" class="center" />
  <figcaption><i class="ion-stats-bars"></i>
    <h4>Ruby </h4>
    <h2>Von Rails </h2>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1321"> <img src={ranimg} alt="randomizer" class="center" />
  <figcaption><i class="ion-share"></i>
    <h4>Quiche    </h4>
    <h2>Hollandaise</h2>
  </figcaption><a href="#"></a>
</figure>
</div>

</div>
    );
};