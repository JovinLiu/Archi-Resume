import Certificate from "../Components/Certificate";
import ExperienceDetail from "../Components/ExperienceDetail";
import Profile from "../Components/Profile";

function Experience() {
  return (
    <section className="flex h-full w-[140mm] list-disc flex-col gap-3 bg-white p-4 text-sm marker:text-sm marker:text-indigo-700">
      <Profile />
      <ExperienceDetail />
      <Certificate />
    </section>
  );
}

export default Experience;
