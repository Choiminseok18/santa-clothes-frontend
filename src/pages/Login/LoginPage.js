import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const StyledLogin = styled.div`
  h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  .wrap {
    width: 490px;
    padding: 40px 20px 20px 20px;
    background-color: #f5f6f7;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-sizing: border-box;
  }

  .title {
    margin: 0 auto;
    width: 240px;
    height: 44px;
    text-align: center;
    font-size: 25px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 240px auto;
    margin-bottom: 20px;
  }

  .kakao,
  .naver,
  .google {
    margin-top: 15px;
    height: 60px;
    border: solid 1px #fee500;
    border-radius: 5px;
    cursor: pointer;
    width: 450px;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .kakao {
    background: #fee500;
    color: #3c1d1e;
  }

  .naver {
    background: limegreen;
    color: white;
  }

  .google {
    background: white;
    color: black;
  }

  .icon {
    width: 40px;
    height: 100%;
    background-size: 90%;
    background-position: 50%;
    margin: 0 20px;
  }

  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    padding-right: 60px;
  }
`;

function LoginPage() {
  const data = {
    pg: 'kakaopay.TC0ONETIME',
    pay_method: 'card',
    merchant_uid: '9993',
    name: '당근 10kg',
    amount: 1004,
    buyer_email: 'yjw9424@naver.com',
    buyer_name: '윤해나',
    buyer_tel: '010-5598-5026',
    buyer_addr: '대전광역시 유성구',
    buyer_postcode: '32501',
  };

  function requestPay() {
    const IMP = window.IMP;
    IMP.init('imp50608685');
    IMP.request_pay(data, (response) => {
      alert('callback!: ' + JSON.stringify(response));

      $.ajax({
        url: '/payment/callback/1',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(response),
      }).done(function (data) {
        alert('Please, Check your orderPayment result page!!');
      });
    });
  }

  return (
    <StyledLogin>
      <div>
      <h1>Santa-clothes</h1>
      <div class="wrap">
        <div class="title">로그인 및 로그아웃</div>
        <a class="kakao"
           href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=cbf0432b0c063d0d602795e63e5881f2&redirect_uri=http://192.168.10.178:8080">

          <div class="kakao_i"></div>
          <div class="kakao_txt">카카오톡으로 간편 로그인</div>
        </a>
        <a class="kakao"
           href="https://kauth.kakao.com/oauth/logout?client_id=cbf0432b0c063d0d602795e63e5881f2&logout_redirect_uri=http://192.168.10.178:8080">

          <div class="kakao_i"></div>
          <div class="kakao_txt">카카오톡 계정 로그아웃</div>
        </a>
        <a class="naver"
           href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=s3AIRornSqDfYiAheFa_&state=0&redirect_uri=http://192.168.10.178:8080/api/oauth/naver">

          <div class="naver_i"></div>
          <div class="naver_txt">네이버 간편 로그인</div>
        </a>
        <a class="naver" href="https://nid.naver.com/nidlogin.logout">

          <div class="naver_i"></div>
          <div class="naver_txt">네이버 간편 로그아웃</div>
        </a>
        <a class="google"
           href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=475110324213-ero24hdidbihqk4lj79igibkh51ihldu.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:8080/api/oauth/google&access_type=offline">

          <div class="google_i"></div>
          <div class="google_txt">구글 간편 로그인</div>
        </a>
        <a class="google" href="https://mail.google.com/mail/u/0/?logout&hl=en">

          <div class="google_i"></div>
          <div class="google_txt">구글 간편 로그아웃</div>
        </a>

        <button></button>
      </div>

      <script>
        {
        function runIndexHtml() {
        // 새 창에서 index.html 파일 실행
        window.open("src/main/resources/templates/index.html", "_blank");
      }
        }
      </script>

      <button onclick="runIndexHtml()">Run index.html</button>
      </div>
    </StyledLogin>
  );
}

export default LoginPage;

