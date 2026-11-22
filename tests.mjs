import {test} from 'node:test';
import assert from 'node:assert/strict';
import {questions,sources,tracks} from './data.js';
test('questions have unique ids, valid answers and explicit provenance',()=>{assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);for(const q of questions){assert.equal(q.options.length,4);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);assert.equal(new Set(q.options).size,4);assert.ok(q.explanation);assert.equal(q.kind,'原创练习');assert.equal(q.year,null);}});
test('each track can supply a ten-question mock including common questions',()=>{for(const t of tracks)assert.ok(questions.filter(q=>q.track==='通用'||q.track===t.id).length>=10);});
test('source links are HTTPS and unverified marketplaces are explicit',()=>{for(const s of sources)assert.equal(new URL(s.url).protocol,'https:');for(const p of ['X / 推特','闲鱼'])assert.equal(sources.find(s=>s.platform===p).status,'待人工核验');});
