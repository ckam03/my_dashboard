import Clock from './Clock';


function Dashboard () {
    return (
        <div className="text-white pt-4 px-10 font-poppins">
            <div className="flex justify-between pt-20">
                <h1 className="text-4xl">Good Morning, Chris</h1>
                <Clock />
            </div>
        </div>
    );
}

export default Dashboard;