import "./styles.css";
import { FcSearch } from "react-icons/fc";

export default function Search() {
  return (
    <div class="search-container">
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <FcSearch />{" "}
        </button>
      </form>
    </div>
  );
}
