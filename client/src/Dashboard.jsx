import useAuth from "./useAuth";
const Dashboard = ({code}) => {
    const accessToken = useAuth(code)
    return (
        <div>
            <h1 className="font-bold text-2xl p-5">Dashboard</h1>
            {code}
        </div>
    );
}

export default Dashboard;
