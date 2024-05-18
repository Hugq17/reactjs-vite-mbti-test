import React from 'react';
import ENTJ from '../contents/ENTJ';
import INTJ from '../contents/INTJ';
import INTP from '../contents/INTP';
import ENTP from '../contents/ENTP';
import INFJ from '../contents/INFJ';
import INFP from '../contents/INFP';
import ENFJ from '../contents/ENFJ';
import ENFP from '../contents/ENFP';
import ISTJ from '../contents/ISTJ';
import ISFJ from '../contents/ISFJ';
import ESTJ from '../contents/ESTJ';
import ESFJ from '../contents/ESFJ';
import ISTP from '../contents/ISTP';
import ISFP from '../contents/ISFP';
import ESTP from '../contents/ESTP';
import ESFP from '../contents/ESFP';

const Result = ({ result }) => {
    // Ánh xạ kết quả MBTI thành component tương ứng
    const resultData = {
        'ENTJ': <ENTJ />,
        'INTJ': <INTJ />,
        'INTP': <INTP />,
        'ENTP': <ENTP />,
        'INFJ': <INFJ />,
        'INFP': <INFP />,
        'ENFJ': <ENFJ />,
        'ENFP': <ENFP />,
        'ISTJ': <ISTJ />,
        'ISFJ': <ISFJ />,
        'ESTJ': <ESTJ />,
        'ESFJ': <ESFJ />,
        'ISTP': <ISTP />,
        'ISFP': <ISFP />,
        'ESTP': <ESTP />,
        'ESFP': <ESFP />,

        // Thêm các phần tử khác tương ứng với các giá trị MBTI khác ở đây
    };

    return (
        <div className='mt-5'>
            {/* Trả về component tương ứng với kết quả */}
            {resultData[result]}
        </div>
    );
}

export default Result;
