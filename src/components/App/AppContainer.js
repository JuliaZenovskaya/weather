export function getGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

    },
    () => {

      alert('Permission denied. Load weather from default coordinates');
    });
  } else {

  }
}
