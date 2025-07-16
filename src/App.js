import React, { useState } from 'react';
import { Check, Book, Calculator, FlaskConical, TreePine, Palette, Music, Globe, Gamepad2, Coffee, Shirt, Bed, Utensils, Heart, Home, Trash2, Calendar, Star, Baby, Clock, Users, Moon, Sun, Sparkles, CheckCircle, Bell, ArrowLeft, User } from 'lucide-react';

const HomeschoolApp = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [state, setState] = useState({
    loop: { reading: false, math: false, science: false, nature: false, art: false, music: false, language: false, games: false },
    rhythm: { breakfast: false, dressed: false, cleanup: false, reading: false, math: false, extra: false, lunch: false, play: false, toys: false },
    chores5: { bed: false, stuffies: false, characters: false, sort: false, floor: false },
    chores3: { bed: false, stuffies: false, toys: false, bins: false, floor: false },
    cleaning: { vacuum: false, lunchToys: false, dinnerToys: false, kitchen: false },
    weekly: { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false },
    agenda: { wake: false, breakfast: false, light: false, chores: false, school: false, lunch: false, nap: false, exercise: false, outdoor: false, reset: false, dinner: false, cleanup: false, bath: false, story: false, me: false }
  });

  const update = (section, key) => setState(prev => ({ ...prev, [section]: { ...prev[section], [key]: !prev[section][key] } }));

  const CheckItem = ({ checked, onChange, icon: Icon, text, color = "text-purple-600" }) => (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <button onClick={onChange} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${checked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'}`}>
        {checked && <Check size={16} />}
      </button>
      <Icon className={`${color} flex-shrink-0`} size={24} />
      <span className={`text-lg font-medium ${checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{text}</span>
    </div>
  );

  const Card = ({ title, children, bgColor = "bg-gradient-to-br from-blue-50 to-purple-50", icon: Icon }) => (
    <div className={`${bgColor} rounded-2xl p-6 shadow-lg`}>
      <div className="flex items-center space-x-3 mb-6">
        <Icon className="text-purple-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );

  const NavButton = ({ icon: Icon, title, desc, color, onClick }) => (
    <button onClick={onClick} className={`${color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left w-full`}>
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="text-white" size={48} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white opacity-90 text-lg">{desc}</p>
    </button>
  );

  const BackBtn = () => (
    <button onClick={() => setCurrentSection('home')} className="flex items-center space-x-2 mb-6 text-purple-600 hover:text-purple-800 transition-colors">
      <ArrowLeft size={24} />
      <span className="text-lg font-medium">Back to Home</span>
    </button>
  );

  if (currentSection === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 shadow-lg">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 flex items-center justify-center">
              <Home className="mr-4" size={48} />Family Homeschool Planner
            </h1>
            <p className="text-xl opacity-90">Choose a tool to get started with your day</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NavButton icon={Book} title="Loop Schedule" desc="Flexible learning activities" color="bg-gradient-to-br from-green-500 to-teal-500" onClick={() => setCurrentSection('loop')} />
            <NavButton icon={Clock} title="Daily Rhythm" desc="Kids' routine checklist" color="bg-gradient-to-br from-orange-500 to-red-500" onClick={() => setCurrentSection('rhythm')} />
            <NavButton icon={CheckCircle} title="Chore Charts" desc="Age-appropriate tasks" color="bg-gradient-to-br from-indigo-500 to-purple-500" onClick={() => setCurrentSection('chores')} />
            <NavButton icon={Home} title="Cleaning" desc="Daily & weekly tasks" color="bg-gradient-to-br from-teal-500 to-green-500" onClick={() => setCurrentSection('cleaning')} />
            <NavButton icon={User} title="Mom's Agenda" desc="Your daily schedule" color="bg-gradient-to-br from-pink-500 to-rose-500" onClick={() => setCurrentSection('agenda')} />
            <NavButton icon={Bell} title="Reminders" desc="Important notes" color="bg-gradient-to-br from-yellow-500 to-orange-500" onClick={() => setCurrentSection('reminders')} />
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 'loop') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><Book className="mr-4" size={40} />Loop Schedule</h1>
            <p className="text-lg opacity-90">Flexible learning activities</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Loop Schedule" icon={Book} bgColor="bg-gradient-to-br from-green-50 to-blue-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center"><Sun className="mr-2" size={24} />Daily Essentials</h3>
                <CheckItem checked={state.loop.reading} onChange={() => update('loop', 'reading')} icon={Book} text="A little reading" color="text-green-600" />
                <CheckItem checked={state.loop.math} onChange={() => update('loop', 'math')} icon={Calculator} text="A little math" color="text-green-600" />
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Sparkles className="mr-2" size={24} />Sometimes Activities</h3>
                <CheckItem checked={state.loop.science} onChange={() => update('loop', 'science')} icon={FlaskConical} text="Science" color="text-blue-600" />
                <CheckItem checked={state.loop.nature} onChange={() => update('loop', 'nature')} icon={TreePine} text="Nature walk" color="text-blue-600" />
                <CheckItem checked={state.loop.art} onChange={() => update('loop', 'art')} icon={Palette} text="Art project" color="text-blue-600" />
                <CheckItem checked={state.loop.music} onChange={() => update('loop', 'music')} icon={Music} text="Music/dance" color="text-blue-600" />
                <CheckItem checked={state.loop.language} onChange={() => update('loop', 'language')} icon={Globe} text="Spanish/Japanese" color="text-blue-600" />
                <CheckItem checked={state.loop.games} onChange={() => update('loop', 'games')} icon={Gamepad2} text="Gameschooling" color="text-blue-600" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentSection === 'rhythm') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><Clock className="mr-4" size={40} />Daily Rhythm</h1>
            <p className="text-lg opacity-90">Kids' daily routines</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Daily Rhythm" icon={Clock} bgColor="bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center"><Sun className="mr-2" size={24} />Morning</h3>
                <CheckItem checked={state.rhythm.breakfast} onChange={() => update('rhythm', 'breakfast')} icon={Coffee} text="Breakfast" color="text-yellow-600" />
                <CheckItem checked={state.rhythm.dressed} onChange={() => update('rhythm', 'dressed')} icon={Shirt} text="Get dressed & teeth" color="text-yellow-600" />
                <CheckItem checked={state.rhythm.cleanup} onChange={() => update('rhythm', 'cleanup')} icon={Bed} text="Quick cleanup" color="text-yellow-600" />
              </div>
              <div className="bg-orange-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center"><Book className="mr-2" size={24} />Learning</h3>
                <CheckItem checked={state.rhythm.reading} onChange={() => update('rhythm', 'reading')} icon={Book} text="Reading" color="text-orange-600" />
                <CheckItem checked={state.rhythm.math} onChange={() => update('rhythm', 'math')} icon={Calculator} text="Math" color="text-orange-600" />
                <CheckItem checked={state.rhythm.extra} onChange={() => update('rhythm', 'extra')} icon={Star} text="One extra activity" color="text-orange-600" />
              </div>
              <div className="bg-pink-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center"><Moon className="mr-2" size={24} />Afternoon</h3>
                <CheckItem checked={state.rhythm.lunch} onChange={() => update('rhythm', 'lunch')} icon={Utensils} text="Lunch & rest" color="text-pink-600" />
                <CheckItem checked={state.rhythm.play} onChange={() => update('rhythm', 'play')} icon={Heart} text="Family playtime" color="text-pink-600" />
                <CheckItem checked={state.rhythm.toys} onChange={() => update('rhythm', 'toys')} icon={Home} text="Cleanup before dinner" color="text-pink-600" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentSection === 'chores') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><CheckCircle className="mr-4" size={40} />Chore Charts</h1>
            <p className="text-lg opacity-90">Age-appropriate tasks</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Chore Charts" icon={CheckCircle} bgColor="bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center"><Users className="mr-2" size={24} />5-Year-Old</h3>
                <CheckItem checked={state.chores5.bed} onChange={() => update('chores5', 'bed')} icon={Bed} text="Make bed" color="text-indigo-600" />
                <CheckItem checked={state.chores5.stuffies} onChange={() => update('chores5', 'stuffies')} icon={Heart} text="Pick up stuffed animals" color="text-indigo-600" />
                <CheckItem checked={state.chores5.characters} onChange={() => update('chores5', 'characters')} icon={Star} text="Pick up character toys" color="text-indigo-600" />
                <CheckItem checked={state.chores5.sort} onChange={() => update('chores5', 'sort')} icon={Home} text="Sort toys into bins" color="text-indigo-600" />
                <CheckItem checked={state.chores5.floor} onChange={() => update('chores5', 'floor')} icon={Sparkles} text="Clear the floor" color="text-indigo-600" />
              </div>
              <div className="bg-purple-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center"><Baby className="mr-2" size={24} />3-Year-Old</h3>
                <CheckItem checked={state.chores3.bed} onChange={() => update('chores3', 'bed')} icon={Bed} text="Make bed" color="text-purple-600" />
                <CheckItem checked={state.chores3.stuffies} onChange={() => update('chores3', 'stuffies')} icon={Heart} text="Pick up stuffies" color="text-purple-600" />
                <CheckItem checked={state.chores3.toys} onChange={() => update('chores3', 'toys')} icon={Star} text="Pick up toys" color="text-purple-600" />
                <CheckItem checked={state.chores3.bins} onChange={() => update('chores3', 'bins')} icon={Home} text="Put toys in bins" color="text-purple-600" />
                <CheckItem checked={state.chores3.floor} onChange={() => update('chores3', 'floor')} icon={Sparkles} text="Clear floor" color="text-purple-600" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentSection === 'cleaning') {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[new Date().getDay()];
    const dayTasks = ['Rest & prep', 'Laundry', 'Trash day', 'Clean bathroom', 'Co-op day', 'Bedroom & toys', 'Family cleanup'];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><Home className="mr-4" size={40} />Cleaning</h1>
            <p className="text-lg opacity-90">Daily & weekly tasks</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Cleaning Schedule" icon={Home} bgColor="bg-gradient-to-br from-teal-50 to-green-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center"><Sparkles className="mr-2" size={24} />Daily</h3>
                <CheckItem checked={state.cleaning.vacuum} onChange={() => update('cleaning', 'vacuum')} icon={Home} text="Vacuum & sweep" color="text-teal-600" />
                <CheckItem checked={state.cleaning.lunchToys} onChange={() => update('cleaning', 'lunchToys')} icon={Star} text="Toys before lunch" color="text-teal-600" />
                <CheckItem checked={state.cleaning.dinnerToys} onChange={() => update('cleaning', 'dinnerToys')} icon={Star} text="Toys before dinner" color="text-teal-600" />
                <CheckItem checked={state.cleaning.kitchen} onChange={() => update('cleaning', 'kitchen')} icon={Utensils} text="Tidy kitchen" color="text-teal-600" />
              </div>
              <div className="bg-blue-100 rounded-xl p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center"><Calendar className="mr-2" size={24} />Weekly</h3>
                <div className="space-y-2">
                  {days.map((day, i) => (
                    <div key={day} className={`p-3 rounded-lg transition-all ${today === day ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-white border border-gray-200'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Calendar className="text-indigo-600" size={16} />
                          <div>
                            <p className="font-bold text-gray-800 capitalize">{day}</p>
                            <p className="text-sm text-gray-600">{dayTasks[i]}</p>
                          </div>
                        </div>
                        <button onClick={() => update('weekly', ['sun','mon','tue','wed','thu','fri','sat'][i])} className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${state.weekly[['sun','mon','tue','wed','thu','fri','sat'][i]] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'}`}>
                          {state.weekly[['sun','mon','tue','wed','thu','fri','sat'][i]] && <Check size={12} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentSection === 'agenda') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><User className="mr-4" size={40} />Mom's Agenda</h1>
            <p className="text-lg opacity-90">Your daily schedule</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Mom's Daily Agenda" icon={User} bgColor="bg-gradient-to-br from-rose-50 to-pink-50">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-yellow-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">🌅 Morning (6-9 AM)</h3>
                  <CheckItem checked={state.agenda.wake} onChange={() => update('agenda', 'wake')} icon={Coffee} text="Quiet time (coffee, journal, prayer)" color="text-yellow-600" />
                  <CheckItem checked={state.agenda.breakfast} onChange={() => update('agenda', 'breakfast')} icon={Utensils} text="Breakfast & tidy" color="text-yellow-600" />
                  <CheckItem checked={state.agenda.light} onChange={() => update('agenda', 'light')} icon={Music} text="Light homeschool (songs, letters)" color="text-yellow-600" />
                </div>
                <div className="bg-orange-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">🌤 Midday (9-12 PM)</h3>
                  <CheckItem checked={state.agenda.chores} onChange={() => update('agenda', 'chores')} icon={Home} text="Light chores (kids help)" color="text-orange-600" />
                  <CheckItem checked={state.agenda.school} onChange={() => update('agenda', 'school')} icon={Book} text="Continue school/sensory play" color="text-orange-600" />
                  <CheckItem checked={state.agenda.lunch} onChange={() => update('agenda', 'lunch')} icon={Utensils} text="Lunch prep & eat" color="text-orange-600" />
                </div>
                <div className="bg-blue-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">😴 Quiet (12-2 PM)</h3>
                  <CheckItem checked={state.agenda.nap} onChange={() => update('agenda', 'nap')} icon={Baby} text="Twins nap/quiet time" color="text-blue-600" />
                  <CheckItem checked={state.agenda.exercise} onChange={() => update('agenda', 'exercise')} icon={Heart} text="Exercise/Write/Read" color="text-blue-600" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-green-800 mb-4">🌇 Afternoon (2-5 PM)</h3>
                  <CheckItem checked={state.agenda.outdoor} onChange={() => update('agenda', 'outdoor')} icon={TreePine} text="Outdoor play/walks" color="text-green-600" />
                  <CheckItem checked={state.agenda.reset} onChange={() => update('agenda', 'reset')} icon={Home} text="Reset living spaces" color="text-green-600" />
                  <CheckItem checked={state.agenda.dinner} onChange={() => update('agenda', 'dinner')} icon={Utensils} text="Start dinner prep" color="text-green-600" />
                </div>
                <div className="bg-purple-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">🌙 Evening (5-8 PM)</h3>
                  <CheckItem checked={state.agenda.cleanup} onChange={() => update('agenda', 'cleanup')} icon={Utensils} text="Dinner & cleanup" color="text-purple-600" />
                  <CheckItem checked={state.agenda.bath} onChange={() => update('agenda', 'bath')} icon={Shirt} text="Bath time & PJs" color="text-purple-600" />
                  <CheckItem checked={state.agenda.story} onChange={() => update('agenda', 'story')} icon={Book} text="Story & bedtime" color="text-purple-600" />
                </div>
                <div className="bg-indigo-100 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-indigo-800 mb-4">🌌 Night (8-10 PM)</h3>
                  <CheckItem checked={state.agenda.me} onChange={() => update('agenda', 'me')} icon={Heart} text="Me-time: Write Read Rest" color="text-indigo-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentSection === 'reminders') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 flex items-center"><Bell className="mr-4" size={40} />Reminders</h1>
            <p className="text-lg opacity-90">Important household notes</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <BackBtn />
          <Card title="Household Reminders" icon={Bell} bgColor="bg-gradient-to-br from-orange-50 to-red-50">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <Trash2 className="text-red-600" size={24} />
                <span className="text-gray-800 font-medium">Trash day is Tuesday</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <Star className="text-purple-600" size={24} />
                <span className="text-gray-800 font-medium">Toy rotation on Friday</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <Home className="text-blue-600" size={24} />
                <span className="text-gray-800 font-medium">Vacuum daily</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default HomeschoolApp;