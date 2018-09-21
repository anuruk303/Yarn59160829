import React, { Component } from 'react';
import Image from './Image';
import Columns from './Columns'
import 'bulma/css/bulma.css';
class MyApp extends Component {
    render() {
        return (
                <section className="sections">
                    <Columns class="columns">

                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="Iphonex" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/appleXsMax.jpg')} alt="Iphonex" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/HuaweiP20_store.png')} alt="Iphonex" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="Iphonex" />
                        </Columns>

                    </Columns>
                </section>
        );
    }
};
export default MyApp;

