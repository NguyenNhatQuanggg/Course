import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { AuthContext } from '../../App';
import Header from '../Components/Header';
import GlobalApi from './../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';
import SectionHeading from '../Components/SectionHeading';
import CourseList from '../Components/CourseList';

export default function HomeScreens() {
    const { handleLogout } = useContext(AuthContext);  

    const handleLogoutPress = () => {
        handleLogout(false);
    };
    const [categories,setCategory]=useState();
    useEffect(()=>{
        getCategory();
     getCourseList();  
    },[])
    const getCategory = () => {                     //tìm nạp dữ liệu danh mục và cập nhật categoriestrạng thái với dữ liệu nhận được
        GlobalApi.getCategory().then(resp=>{
            setCategory(resp.categories)
        })
    }

    const [courseList, setCourseList]= useState([]);
     const getCourseList = () => {                    //tìm nạp dữ liệu danh sách khóa học và cập nhật trạng thái tương ứng.
        GlobalApi.getCourseList().then(resp=>{
            setCourseList(resp?.courseLists);
        })
    }

    const getFilterCouresList = (tag) => {    //chứa logic để lọc danh sách khóa học dựa trên thẻ được cung cấp.
    
   }
    return (
        <ScrollView style={{ padding: 20, marginTop: 25 }}>
            <Header />
            <CategoryList categories={categories}/>

            {/* All Course List */}
            <SectionHeading heading={'Latest course'}/>
            <CourseList courseList={courseList}/>

            {/* React Native List */}
            <SectionHeading heading={'React native  course'} />
            <CourseList courseList={courseList} />


        </ScrollView>
    );
}