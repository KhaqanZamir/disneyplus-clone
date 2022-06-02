import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommended from './Recommended';
import Viewers from './Viewers';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import Trending from './Trending';

export default function Home() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommend = [];
  let newDisney = [];
  let trending = [];
  let original = [];

  useEffect(() => {
    if (userName) {
      db.collection('movies').onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case 'recommend':
              recommend.push({id: doc.id, ...doc.data()});
              // recommend = [...recommend, { id: doc.id, ...doc.data() }];
              break;
            case 'new':
              newDisney.push({id: doc.id, ...doc.data()});
              // newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
              break;
            case 'original':
              original.push({id: doc.id, ...doc.data()});
              // original = [...original, { id: doc.id, ...doc.data() }];
              break;
            case 'trending':
              trending.push({id: doc.id, ...doc.data()});
              // trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: recommend,
            newDisney: newDisney,
            original: original,
            trending: trending,
          })
        );
      });
    }
  }, [userName]);

  return (
    <div className='home-wrapper'>
      <div className='container w-full mx-auto items-center pb-10'>
        <ImageSlider />
        <Viewers />
        <Recommended />
        <NewDisney />
        <Originals />
        <Trending />
      </div>
    </div>
  )
}
