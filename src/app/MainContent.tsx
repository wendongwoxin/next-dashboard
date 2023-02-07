import SearchInput from "@/components/SearchInput";
import UserCenter from "@/components/UserCenter";
import MobileIcon from "@/components/MobileIcon";
import "../style/main.scss";

export default function MainContent() {
  return (
    <section className="main-content">
      <div className="main-content__header flex justify-between">
        <MobileIcon />
        <SearchInput />
        <UserCenter />
      </div>
    </section>
  );
}
