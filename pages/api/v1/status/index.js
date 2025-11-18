function status(request, response) {
  response.status(200).json({
    chave: "é teste api!",
  });
}

export default status;
