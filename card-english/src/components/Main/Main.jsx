import img from '../../images/main_img.jpg';

function Main() {
    return (
        <main className="main">
            <p className="main__desc">Discover the magic of learning with cards</p>
            <img src={img} alt="" />
        </main>
    );
}

export default Main;