import React, { useEffect } from 'react';

const AddressForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // 폼 전송 처리 로직 작성
    // 서버로 데이터를 전송하거나 다른 작업을 수행

    // 예시: 데이터 로그 출력
    const formData = new FormData(event.target);
    console.log({
      postcode: formData.get('postcode'),
      postAddress: formData.get('postAddress'),
      detailAddress: formData.get('detailAddress'),
      extraAddress: formData.get('extraAddress'),
    });

    // 서버로 데이터를 전송
    const url = 'http://192.168.10.178:8080/submit/new'; // 서버 주소
    // const data = {
    //   postcode: formData.get('postcode'),
    //   postAddress: formData.get('postAddress'),
    //   detailAddress: formData.get('detailAddress'),
    //   extraAddress: formData.get('extraAddress'),
    // };

    // 폼 데이터 직렬화
    const encodedData = new URLSearchParams(formData).toString();

    let concatenatedData = '';
    for (const [key, value] of formData.entries()) {
      concatenatedData += `${key}=${encodeURIComponent(value)}&`;
    }
    concatenatedData = concatenatedData.slice(0, -1); // 마지막의 "&" 문자 제거

    console.log(concatenatedData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodedData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleAddressSearch = () => {
    // 우편번호 찾기 버튼 클릭 시 실행되는 함수
    new window.daum.Postcode({
      oncomplete: (data) => {
        // 팝업에서 검색결과 항목을 클릭했을 때 실행되는 코드
        let addr = ''; // 주소 변수
        let extraAddr = ''; // 참고항목 변수

        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') {
          // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else {
          // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일 때 참고항목을 조합한다.
        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
          document.getElementById('sample6_extraAddress').value = extraAddr;
        } else {
          document.getElementById('sample6_extraAddress').value = '';
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample6_postcode').value = data.zonecode;
        document.getElementById('sample6_address').value = addr;
        document.getElementById('sample6_detailAddress').focus();
      },
    }).open();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="sample6_postcode" name="postcode" placeholder="우편번호" />
      <input type="button" onClick={handleAddressSearch} value="우편번호 찾기" />
      <br />
      <input type="text" id="sample6_address" name="postAddress" placeholder="주소" />
      <br />
      <input type="text" id="sample6_detailAddress" name="detailAddress" placeholder="상세주소" />
      <input type="text" id="sample6_extraAddress" name="extraAddress" placeholder="참고항목" />
      <input type="submit" value="전송" />
    </form>
  );
};

export default AddressForm;