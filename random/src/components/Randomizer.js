import React from 'react';

import './Randomizer.css';



const Randomizer = () => {
        // const [contacts, setContacts] = useState([]);

        // useEffect(() => {
        //     axios.get(`htps://random-ark-generator.herokuapp.com/api/contacts/random/${1}`)
        //         .then(res => {
        //             console.log(res.data);
        //             setActs(res.data)
        //         })
        //         .catch(err => console.log('Cannot get list', err));
        // }, []);


        return ( 

            <div className="mainCover">
                <div className="header">
                    <h2> Randomizer </h2>
                </div>
                <div className="boxInside">
                <p className="titleRandom">Bake Them A Cake:</p>
                <p className="titleRandom">Nicole Hernandez </p>
                 <button className = "btnRandomizer" > Completed </button>
                 < button className ="btnRandomizer" > Randomize </button>
                </div>
               
                </div>
            )
        }

        export default Randomizer;