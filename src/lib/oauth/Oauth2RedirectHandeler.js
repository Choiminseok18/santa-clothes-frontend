import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {kakaoLogin} from "./AuthenticationService";

export default function Oauth2RedirectHandler (props) {
  let navigate = useNavigate();
  let params = new URL(document.URL).searchParams;
  let code = params.get('code');

  useEffect(() => {
    kakaoLogin(code)
      .then((response) => {
        console.log('kakaoLogin');
        console.log(response.data.accessToken);
        console.log(response.data.email);
        localStorage.setItem('member', JSON.stringify(response.data));
        console.log(response);
        navigate('/');
      })
      .catch((error) => {
        console.log('kakaoLogin Failed');
        console.error(error);
        navigate('/');
      });
  }, [code]);


  return (
        <>
            <div>
              <div >로그인 중입니다.</div>
            </div>
        </>
    )
}