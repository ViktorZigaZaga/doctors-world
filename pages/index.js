import axios from 'axios';
import Header from "../components/Header";
import Main from "../components/Main";

export default function Index(props) {
    return (
        <>
            <Header />
            <Main {...props} />
        </>

    );
}

export const getStaticProps = async () => {

    const survivability = await axios.get("http://localhost:5000/survivability").then(({data}) => data);
    const strategies = await axios.get("http://localhost:5000/strategies").then(({data}) => data);
    const recommendations = await axios.get("http://localhost:5000/recommendations").then(({data}) => data);


    return {
        props: {          
            survivability,
            strategies,
            recommendations
        }
    }
}