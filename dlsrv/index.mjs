import express from "express";
import compression from "compression";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;
const compressionOptions = {
  threshold: 0,
  filter: () => true,
};
const corsOptions = {
  origin: "*",
  methods: "GET",
  allowedHeaders: "Content-Length",
};
app.use(compression(compressionOptions));
app.use(cors(corsOptions));
app.use(express.static("images"));
app.get("/:image", (req, res) => {
  res.set("Access-Control-Expose-Headers", "Content-Length");
  res.set("Content-Type", "application/octet-stream");
  res.download(`/images/${req.params.image}`);
});
app.get("/", (_req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`
  <!DOCTYPE html><html><script>window.location.href = "https://asyncsmasher.com"</script></html>
  `);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
