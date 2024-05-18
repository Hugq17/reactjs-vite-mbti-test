import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa6";
import Result from './Result';
import { useNavigate } from "react-router-dom";

function MBTI() {
    const [isLoading, setIsLoading] = useState(true);
    const [questionsData, setQuestionsData] = useState([]);
    const [answersData, setAnswersData] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [E_mbti, setE_mbti] = useState(0);
    const [I_mbti, setI_mbti] = useState(0);
    const [S_mbti, setS_mbti] = useState(0);
    const [N_mbti, setN_mbti] = useState(0);
    const [T_mbti, setT_mbti] = useState(0);
    const [F_mbti, setF_mbti] = useState(0);
    const [J_mbti, setJ_mbti] = useState(0);
    const [P_mbti, setP_mbti] = useState(0);
    const [result, setResult] = useState("")
    const [count, setCount] = useState(0);
    const [questionWidth, setQuestionWidth] = useState('80%');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get("https://nodejs-study-v4-postgresql-deloy-render.onrender.com/api/v1/questions");
                setQuestionsData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const response = await axios.get("https://nodejs-study-v4-postgresql-deloy-render.onrender.com/api/v1/answers");
                setAnswersData(response.data.data);
            } catch (error) {
                console.error('Error fetching answers:', error);
            }
        };
        fetchAnswers();
    }, []);

    const handleClickDre = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
        console.log(result)
    };

    const handleClickValue = (answerId, traittype) => {
        const currentQuestionId = questionsData[count].questionid;
        const currentSelectedAnswer = selectedAnswers[currentQuestionId];

        // Trừ điểm từ đáp án trước nếu có
        if (currentSelectedAnswer) {
            const { answerId: prevAnswerId, traittype: prevTraittype } = currentSelectedAnswer;
            if (prevTraittype === 'E') {
                setE_mbti(prevE_mbti => prevE_mbti - 1);
            } else if (prevTraittype === 'I') {
                setI_mbti(prevI_mbti => prevI_mbti - 1);
            } else if (prevTraittype === 'S') {
                setS_mbti(prevS_mbti => prevS_mbti - 1);
            } else if (prevTraittype === 'N') {
                setN_mbti(prevN_mbti => prevN_mbti - 1);
            } else if (prevTraittype === 'T') {
                setT_mbti(prevT_mbti => prevT_mbti - 1);
            } else if (prevTraittype === 'F') {
                setF_mbti(prevF_mbti => prevF_mbti - 1);
            } else if (prevTraittype === "J") {
                setJ_mbti(prevJ_mbti => prevJ_mbti - 1);
            } else if (prevTraittype === "P") {
                setP_mbti(prevP_mbti => prevP_mbti - 1);
            }
        }

        setSelectedAnswers(prevSelectedAnswers => ({
            ...prevSelectedAnswers,
            [currentQuestionId]: { answerId, traittype }
        }));

        // Thêm điểm cho đáp án mới
        if (traittype === 'E') {
            setE_mbti(prevE_mbti => prevE_mbti + 1);
        } else if (traittype === 'I') {
            setI_mbti(prevI_mbti => prevI_mbti + 1);
        } else if (traittype === 'S') {
            setS_mbti(prevS_mbti => prevS_mbti + 1);
        } else if (traittype === 'N') {
            setN_mbti(prevN_mbti => prevN_mbti + 1);
        } else if (traittype === 'T') {
            setT_mbti(prevT_mbti => prevT_mbti + 1);
        } else if (traittype === 'F') {
            setF_mbti(prevF_mbti => prevF_mbti + 1);
        } else if (traittype === "J") {
            setJ_mbti(prevJ_mbti => prevJ_mbti + 1);
        } else if (traittype === "P") {
            setP_mbti(prevP_mbti => prevP_mbti + 1);
        }

        if (count < questionsData.length - 1) {
            setCount(prevCount => prevCount + 1);
            console.log("E_mbti: " + E_mbti);
            console.log("I_mbti: " + I_mbti);
            console.log("S_mbti: " + S_mbti);
            console.log("N_mbti: " + N_mbti);
            console.log("T_mbti: " + T_mbti);
            console.log("F_mbti: " + F_mbti);
            console.log("J_mbti: " + J_mbti);
            console.log("P_mbti: " + P_mbti);
            console.log("-------------------------------")
        }
    };

    const handleClickResult = () => {
        const resultE_I = E_mbti > I_mbti ? 'E' : 'I';
        const resultS_N = S_mbti > N_mbti ? 'S' : 'N';
        const resultF_T = F_mbti > T_mbti ? 'F' : 'T';
        const resultJ_P = J_mbti > P_mbti ? 'J' : 'P';

        const finalResult = `${resultE_I}${resultS_N}${resultF_T}${resultJ_P}`;
        setResult(finalResult);
    };
    return (
        <div className='h-screen w-screen bg-[#FEFAF6] flex justify-center items-center text-3xl font-sans'>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div style={{ width: questionWidth }}>
                    {questionsData.length > 0 && (
                        <div>
                            <p className='text-xl flex flex-row'>Câu số<p className='ml-3 text-[#F27BBD]'>{count + 1}</p>/70</p>
                            <div key={questionsData[count].questionid} className='border-[1px] p-4 w-fit rounded-t-3xl rounded-br-3xl bg-[#F27BBD] text-white mt-2'>
                                {questionsData[count].questioncontent} :
                            </div>
                            <div>
                                {answersData.length > 0 && answersData.map((answer, index) => {
                                    if (answer.questionid === questionsData[count].questionid) {
                                        const currentQuestionId = questionsData[count].questionid;
                                        const isSelected = selectedAnswers[currentQuestionId]?.answerId === answer.answerid;
                                        return (
                                            <div className='mt-2 button-wrapper' key={answer.answerid}>
                                                <button
                                                    onClick={() => handleClickValue(answer.answerid, answer.traittype)}
                                                    style={{
                                                        backgroundColor: isSelected ? 'lightgray' : '#FEFAF6',

                                                    }}
                                                    className='rounded-t-3xl rounded-br-3xl p-4'
                                                >
                                                    {index % 2 === 0 ? 'a. ' : 'b. '}
                                                    {answer.answercontent}
                                                </button>
                                            </div>

                                        );
                                    }
                                    return null;
                                })}
                            </div>

                        </div>
                    )}
                    <div className='flex'>
                        {count !== 0 && (
                            <button onClick={handleClickDre} className='ml-5'><FaArrowLeft /></button>
                        )}
                        {count === 69 && (
                            <div className='border-[1px] p-4 rounded-3xl ml-7 hover:bg-[#F27BBD] hover:text-white'>
                                <button onClick={handleClickResult}>Xem kết quả</button>
                            </div>
                        )}
                        {result && <Result result={result} />}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MBTI;
