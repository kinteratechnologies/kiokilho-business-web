async function list() {
  try {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAWru4hFx-6P5QrxWjfmMmPkWF5O1VNjrQ");
    const json = await res.json();
    console.log(json.models.map(m => m.name).join(', '));
  } catch(e) {
    console.error(e);
  }
}
list();
