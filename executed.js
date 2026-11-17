// Renders an accepted copy of the Agreement with its Acceptance Record (used by index.html and records.html).
(function(){
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  window.BB_ACKS = [
    'I have read the Access Notice and the Agreement in full.',
    'I understand that the information I will receive is or may be material non-public information, and that from acceptance the Recipient, its firm and its affiliates may not trade in the Restricted Securities or pass the information on, as set out in Sections 5 and 6.',
    'The eligibility category selected above and the representations in Section 13 are true. I was approached individually by the Company or its placement agents.',
    'I have authority to bind the Recipient. I consent to this Agreement being made electronically and agree that typing my name and selecting "I accept" is the Recipient’s signature under Section 15.'
  ];
  window.BB_eligibilityLabel = function(letter){
    var A = window.BB_AGREEMENT, t = A.eligibility[letter];
    return t ? 'Section 13.1(' + letter + '): ' + t : '';
  };
  window.BB_renderExecuted = function(r){
    var A = window.BB_AGREEMENT;
    function row(k, v){ return '<tr><td style="padding:4px 14px 4px 0;vertical-align:top;font-weight:600;white-space:nowrap;">'+esc(k)+'</td><td style="padding:4px 0;vertical-align:top;white-space:pre-wrap;">'+esc(v||'—')+'</td></tr>'; }
    return '<div style="text-align:center;font-size:17px;font-weight:600;margin-bottom:6px;">'+esc(A.title)+'</div>'+
      '<div style="text-align:center;font-size:12px;color:#555;margin-bottom:22px;">Brains Bioceutical Corp. · accepted electronically · version '+esc(r['agreement-version']||A.version)+'</div>'+
      '<div style="margin-bottom:14px;"><div style="font-weight:600;margin-bottom:5px;">Access Notice</div>'+A.accessNotice.map(function(p){return '<p style="margin:0 0 7px;">'+esc(p)+'</p>';}).join('')+'</div>'+
      A.sections.map(function(sec){ return '<div style="margin-bottom:14px;"><div style="font-weight:600;margin-bottom:5px;">'+esc(sec.h)+'</div>'+sec.b.map(function(p){return '<p style="margin:0 0 7px;">'+esc(p)+'</p>';}).join('')+'</div>'; }).join('')+
      '<div style="margin-top:26px;border-top:1px solid #999;padding-top:16px;">'+
      '<div style="font-weight:600;font-size:14px;margin-bottom:10px;">Acceptance Record</div><table style="border-collapse:collapse;font-size:12px;">'+
      row('Recipient', r['recipient-type']==='Corporation / entity' ? r.entity : r.name)+
      row('Recipient type', r['recipient-type'])+
      row('Accepted by', r.name)+ row('Title', r.title)+
      row('Capacity', r.capacity)+ row('Prospective investor advised', r['investor-advised'])+
      row('Jurisdiction', r.jurisdiction)+
      row('Eligibility category', r.eligibility)+
      row('Individuals to have access', r['access-individuals'])+
      row('Instrument relied on, s. 6.3(a)', r['instrument-6-3a'])+
      row('Email for notices', r.email)+ row('Address for notices', r.address)+
      row('Acknowledgements', r.acknowledgements)+
      row('Signature (typed name)', r['typed-name'])+
      row('Date and time of acceptance', r.timestamp)+
      row('IP address', r.ip || 'Recorded by the Company at submission')+
      row('Agreement version', r['agreement-version']||A.version)+
      '</table></div>';
  };
})();
