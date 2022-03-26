import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import { userData } from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { userRequest } from "../../requestMethods";

const Home = () => {

    const [userStats, setUserStats] = useState([]);

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("/users/stats");
                res.data.map((item) =>{
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                });
            } catch(err) {
                console.log(err.message);
             }
        };
        getStats();
    }, [MONTHS]);

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title="User Analylitics" data={userStats} dataKey="Active User" grid />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>


    )
}

export default Home