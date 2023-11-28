import axios from "axios";

export const kakaoLogin = (code) => {
  return axios.get(`/api/oauth/kakao`,
    {
      params: {
        code,
      }
    });
}