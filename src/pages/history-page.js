import UserCard from "../components/user-card";
import { useAuth } from "../context/auth-context";


function HistoryPage() {
  const { favorites, setCurrentPage } = useAuth();
  setCurrentPage("FavoritePage");
  console.log(favorites);

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "16px", alignItems: "center"}}>
      <h1>History</h1>

    </div>
  );
}

export default HistoryPage;
