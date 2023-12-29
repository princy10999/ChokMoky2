import { Divider } from '@mui/material';
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import ArtistCollection from '../../Components/ArtistCollection';
import BannerPart from '../../Components/BannerPart'
import BestSelling from '../../Components/BestSelling';
import ClientMsg from '../../Components/ClientMsg';
import CollectionPart from '../../Components/CollectionPart'
import CollectionPolicy from '../../Components/CollectionPolicy';
import GetInTouch from '../../Components/GetInTouch';
import NewArrivals from '../../Components/NewArrivals';
import StyleSection from '../../Components/StyleSection';
import { dummyAPI } from '../../Redux/Actions/AuthUser';
import { useAppSelector } from '../../Redux/app/hooks';


function Home() {
  const dispatch = useDispatch()
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  useEffect(() => {
    document.title = "Chokmoki";
    dummyAPIcall()
  }, []);
  const dummyAPIcall = async () => {
    const data = await dispatch(dummyAPI())
    console.log("data",data);
  }

  const dummyAPIList = useAppSelector(
    (state) => state?.auth?.isDummyApiListData?.dummyLists
  );
console.log("dummyAPIList",dummyAPIList);
  return (
    <>
      <BannerPart handleClick={handleClick}/>
      <div ref={ref}></div>
      <CollectionPart ref={ref}/>
      <NewArrivals/>
      <StyleSection/>
      <ArtistCollection/>
      <BestSelling/>
      <ClientMsg/>
      <Divider/>
      <GetInTouch />
      <CollectionPolicy /> 
    </>
  )
}

export default Home