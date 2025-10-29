# CSF Assessment Pro - NIST Cybersecurity Framework 2.0 Tool

A comprehensive web application for conducting NIST Cybersecurity Framework 2.0 assessments with full organizational features including user management, artifact tracking, and privacy framework integration.

## Features

### Framework Coverage
- ✅ **NIST CSF 2.0** - Complete implementation with all 6 functions:
  - **GOVERN** (New in CSF 2.0)
  - IDENTIFY
  - PROTECT
  - DETECT
  - RESPOND
  - RECOVER
- ✅ **NIST Privacy Framework 1.0** - Integrated privacy assessment
- ✅ 106+ Subcategories with 363+ implementation examples

### Assessment Capabilities
- **Dual Scoring System**:
  - 0-3 Maturity Scale (Not Implemented → Fully Implemented)
  - 0-10 Granular Scale (Insecurity → Fully Optimized)
- **Current & Desired State Tracking**
- **Gap Analysis with Visual Charts**
- **Observations & Findings Documentation**
- **Action Plan Management**

### Organizational Features
- **User Management**:
  - Owner assignment per control
  - Auditor assignment
  - Multiple stakeholders per control
  - Team collaboration support
- **Artifact Management**:
  - Central evidence repository
  - Link artifacts to multiple subcategories
  - "Test once, assure many" approach
  - URL tracking for documentation
- **Testing Status Tracking**:
  - Not Started
  - In Progress
  - Complete
  - Issues Found

### Data Management
- **CSV Import/Export** - Full data portability
- **Excel Integration** - Compatible with templates
- **LocalStorage** - Browser-based persistence
- **Backup/Restore** - Data protection

### Visualization & Reporting
- **Radar Charts** - Maturity by function
- **Pie Charts** - Status distribution
- **Progress Tracking** - Completion percentages
- **Gap Analysis Dashboard** - Prioritized recommendations

### Documentation
- **Framework Reference** - Complete CSF 2.0 documentation
- **Implementation Guidance** - NIST resources
- **Scoring Legend** - Assessment methodology
- **Training Resources** - Links to educational content

## Technology Stack

- **React 19** - Latest UI framework
- **Vite** - Modern build tool (lightning-fast)
- **React Router** - Client-side routing
- **Recharts** - Data visualization
- **PapaParse** - CSV handling
- **Lucide React** - Beautiful icons
- **Modern CSS** - Responsive design

## Installation

```bash
# Clone the repository
git clone https://github.com/orangejam72/csf-assessment-pro.git
cd csf-assessment-pro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The application will be available at `http://localhost:5173/`

## Usage Guide

### 1. Conduct an Assessment

1. Navigate to **Controls** (CSF) or **Privacy** tab
2. Filter by Function, Category, or In-Scope status
3. Select a subcategory to view details
4. Assign Owner, Auditor, and Stakeholders
5. Rate current and desired implementation level
6. Add observations and action plans
7. Link artifacts as evidence
8. Mark testing status

### 2. Manage Users

1. Go to **User Management**
2. Add team members with name, email, and role
3. Users become available for assignment in assessments

### 3. Track Artifacts

1. Navigate to **Artifacts** tab
2. Create new artifacts with descriptions and links
3. Link artifacts to relevant subcategories
4. Artifacts can support multiple controls

### 4. Analyze Gaps

1. View **Gap Analysis** dashboard
2. See prioritized recommendations
3. Review maturity radar charts
4. Export findings for reporting

### 5. Export/Import Data

1. Use **Export CSV** to save assessment data
2. Use **Import CSV** to restore or update data
3. Compatible with Excel for custom reporting

## Scoring Methodology

### Maturity Scale (0-3)
- **0**: Not Implemented - No controls in place
- **1**: Partially Implemented - Some controls, inconsistent
- **2**: Largely Implemented - Most controls in place
- **3**: Fully Implemented - Complete, optimized controls

### Granular Scale (0-10)
- **0-1.9**: Insecurity - Rarely or never implemented
- **2.0-4.9**: Some Security - Sometimes implemented, unreliable
- **5.0-5.9**: Minimally Acceptable - Consistent with minor flaws
- **6.1-6.9**: Optimized - Consistent with great effectiveness
- **7.0-7.9**: Fully Optimized - Maximum effectiveness
- **8.1-10.0**: Too Much Security - Excessive cost

## Sources & Credits

### NIST Frameworks
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [NIST Privacy Framework 1.0](https://www.nist.gov/privacy-framework)
- [NIST Special Publications](https://csrc.nist.gov/publications)

### Inspiration
- **SimpleCyber Academy** - CSF Profile Assessment methodology
- **Simply Cyber** - Educational content and training
- Original tools:
  - [simplecyber-csf-tool](https://github.com/orangejam72/simplecyber-csf-tool)
  - [SaaS-NIST-Tool](https://github.com/orangejam72/SaaS-NIST-Tool)

## License

MIT License - See LICENSE file for details

## Disclaimer

This software is provided "AS IS" without warranty of any kind. This tool is for educational and informational purposes. Users should verify all assessment findings independently and consult with qualified cybersecurity professionals.

## Contributing

Contributions are welcome! Please submit pull requests or open issues for improvements.
