import Footer from "../common-component/footer";
import Header from "../common-component/header";
// import "../css/ourProgram.css";

function OurProgram() {
    const scrollStateList = (direction) => {
        const container = document.getElementById("state-list-container");
        const scrollAmount = direction === 'left' ? -200 : 200;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const selectState = (state) => {
        console.log(`Selected state: ${state}`);
        // Add logic to handle state selection
    };

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <h1>NGO's List Working on Marine Cleanliness</h1>
                </div>
                <div id="state-list">
                    <div className="arrow" onClick={() => scrollStateList('left')}>&#9665;</div>
                    <ul id="state-list-container">
                        <li onClick={() => selectState('Gujarat')} data-state="Gujarat" key="Gujarat">
                            Gujarat
                            <img src=" /images-removebg-preview.png" alt="Gujarat Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('Maharashtra')} data-state="Maharashtra" key="Maharashtra">
                            Maharashtra
                            <img src=" /maharashtra.png" alt="Maharashtra Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('Goa')} data-state="Goa" key="Goa">
                            Goa
                            <img src=" /images-removebg-preview (1).png" alt="Goa Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('Karnataka')} data-state="Karnataka" key="Karnataka">
                            Karnataka
                            <img src=" /karnataka.png" alt="Karnataka Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('Kerala')} data-state="Kerala" key="Kerala">
                            Kerala
                            <img src=" /kerala.png" alt="Kerala Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('TamilNadu')} data-state="TamilNadu" key="TamilNadu">
                            Tamil<br />Nadu
                            <img src=" /tamilnadu.png" alt="Tamil Nadu Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('AndhraPradesh')} data-state="AndhraPradesh" key="AndhraPradesh">
                            Andhra<br />Pradesh
                            <img src=" /andhrapradesh.png" alt="Andhra Pradesh Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('Odisha')} data-state="Odisha" key="Odisha">
                            Odisha
                            <img src=" /odisha.png" alt="Odisha Map" width="110" height="110" />
                        </li>
                        <li onClick={() => selectState('WestBengal')} data-state="WestBengal" key="WestBengal">
                            West<br />Bengal
                            <img src=" /westbengal.png" alt="West Bengal Map" width="110" height="110" />
                        </li>
                    </ul>
                    <div className="arrow" onClick={() => scrollStateList('right')}>&#9655;</div>
                </div>

                <div id="ngo-table">
                    <h2>NGOs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Website</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody id="ngo-list">
                            {/* Populate with NGOs dynamically */}
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default OurProgram;
