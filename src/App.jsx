import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Download, Upload } from 'lucide-react';
import Papa from 'papaparse';

// Import components
import Navigation from './components/Navigation';
import Controls from './pages/Controls';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ScoringLegend from './pages/ScoringLegend';
import Artifacts from './pages/Artifacts';
import GapAnalysis from './pages/GapAnalysis';
import Documentation from './pages/Documentation';

// Import CSF 2.0 data
import { FULL_CSF_REFERENCE, PRIVACY_FRAMEWORK } from './data/csf2Data';

const App = () => {
  const [data, setData] = useState([]);
  const [privacyData, setPrivacyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    // Load CSF 2.0 data
    const storedData = localStorage.getItem('csfData');
    const storedPrivacy = localStorage.getItem('privacyData');
    const storedUsers = localStorage.getItem('users');
    const storedArtifacts = localStorage.getItem('artifacts');

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      // Initialize with CSF 2.0 structure
      const initialData = FULL_CSF_REFERENCE.flatMap(func =>
        func.categories.flatMap(cat =>
          cat.subcategories.map(sub => ({
            ...sub,
            Function: func.funcName,
            FunctionKey: func.funcKey,
            Category: cat.catName,
            CategoryKey: cat.catKey,
            'Subcategory ID': sub.subKey,
            Description: sub.description,
            'Current Score': 0,
            'Desired Score': 5,
            'Testing Status': 'Not Started',
            'In Scope? ': 'Yes',
            Observations: '',
            'Action Plan': '',
            ownerId: null,
            auditorId: null,
            stakeholderIds: [],
            linkedArtifacts: []
          }))
        )
      );
      setData(initialData);
      localStorage.setItem('csfData', JSON.stringify(initialData));
    }

    if (storedPrivacy) {
      setPrivacyData(JSON.parse(storedPrivacy));
    } else {
      // Initialize Privacy Framework
      const initialPrivacy = PRIVACY_FRAMEWORK.flatMap(func =>
        func.categories.flatMap(cat =>
          cat.subcategories.map(sub => ({
            ...sub,
            Function: func.funcName,
            FunctionKey: func.funcKey,
            Category: cat.catName,
            CategoryKey: cat.catKey,
            'Subcategory ID': sub.subKey,
            Description: sub.description,
            'Current Score': 0,
            'Desired Score': 5,
            'Testing Status': 'Not Started',
            'In Scope? ': 'Yes',
            Observations: '',
            'Action Plan': '',
            ownerId: null,
            auditorId: null,
            stakeholderIds: [],
            linkedArtifacts: []
          }))
        )
      );
      setPrivacyData(initialPrivacy);
      localStorage.setItem('privacyData', JSON.stringify(initialPrivacy));
    }

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    if (storedArtifacts) {
      setArtifacts(JSON.parse(storedArtifacts));
    }

    setLoading(false);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('csfData', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    if (privacyData.length > 0) {
      localStorage.setItem('privacyData', JSON.stringify(privacyData));
    }
  }, [privacyData]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('artifacts', JSON.stringify(artifacts));
  }, [artifacts]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">CSF Assessment Pro v1.0</h1>
            <p className="text-sm text-blue-100">NIST Cybersecurity Framework 2.0 & Privacy Framework Assessment Tool</p>
          </div>
        </header>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={
              <Controls
                data={data}
                setData={setData}
                users={users}
                artifacts={artifacts}
                loading={loading}
              />
            } />
            <Route path="/dashboard" element={<Dashboard data={data} privacyData={privacyData} />} />
            <Route path="/gap-analysis" element={<GapAnalysis data={data} privacyData={privacyData} />} />
            <Route path="/scoring" element={<ScoringLegend />} />
            <Route path="/artifacts" element={
              <Artifacts
                data={data}
                artifacts={artifacts}
                setArtifacts={setArtifacts}
              />
            } />
            <Route path="/users" element={
              <UserManagement
                users={users}
                setUsers={setUsers}
              />
            } />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-16 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">
              Based on NIST CSF 2.0 & Privacy Framework 1.0
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Merged tool combining simplecyber-csf-tool and SaaS-NIST-Tool
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
