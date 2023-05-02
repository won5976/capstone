// 비디오 스트림 가져오기
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // 비디오 엘리먼트 만들기
    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();

    // 미디어 레코더 만들기
    const mediaRecorder = new MediaRecorder(stream);
    const chunks = [];
    //데이터 나누는 함수 chunks

    // 녹화 시작
    mediaRecorder.start();

    // 데이터를 수집할 때마다 실행됨
    mediaRecorder.addEventListener('dataavailable', event => {
      chunks.push(event.data);
    });

    // 녹화가 끝나면 실행됨
    mediaRecorder.addEventListener('stop', () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const formData = new FormData();
      formData.append('video', blob);

      // 서버로 데이터 전송하기
      fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
    });

    // 10초 후에 녹화 종료하기
    setTimeout(() => {
      mediaRecorder.stop();
    }, 10000);//조절 가능함
  })
  .catch(error => {
    console.error(error);
  });
  const video = document.getElementById('video');


  // 위에꺼만 하면 화면이 안나타남
  //추가해줘야지 되는데 왜 이러는지는 모르겠네
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.play();
    })
    .catch(error => {
      console.error('Error accessing media devices.', error);
    });
  