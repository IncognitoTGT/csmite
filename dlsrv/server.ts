import express from "express";
import compression from "compression";
import cors from "cors";
import serveIndex from "serve-index";
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
app.use(
  express.static("images"),
  serveIndex("images", {
    icons: true,
    stylesheet: __dirname + "/style.css",
    view: "details",
  }),
);
app.get("/:image", (req, res) => {
  res.set("Access-Control-Expose-Headers", "Content-Length");
  res.set("Content-Type", "application/octet-stream");
  res.download(`/images/${req.params.image}`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
